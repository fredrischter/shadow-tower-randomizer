FROM ubuntu:24.04

WORKDIR /app

# Install necessary dependencies including git (needed for build)
RUN apt update && apt install -y \
    build-essential \
    wget \
    curl \
    unzip \
    libstdc++6 \
    libc6 \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy the .deb package to the container
COPY mkpsxiso-2.10-Linux.deb /tmp/mkpsxiso.deb

# Install mkpsxiso from the .deb package
RUN dpkg -i /tmp/mkpsxiso.deb || apt-get install -f -y

# Clean up
RUN rm -f /tmp/mkpsxiso.deb

# Set environment (if needed)
ENV LD_LIBRARY_PATH=/usr/lib:/lib:/usr/local/lib

# Run your binary to check installation
RUN mkpsxiso --help
RUN dumpsxiso --help

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Verify Node.js installation
RUN node -v && npm -v

COPY package*.json ./
RUN npm install --omit=dev  

RUN mkdir -p /app/generated

COPY *.js ./
COPY *.json ./
COPY *.html ./
COPY site /app/site  
COPY params /app/params
COPY maps /app/maps

# Copy .git directory temporarily to extract version info during build
COPY .git /app/.git

# Capture git version info and set as environment variables
# This allows the version endpoint to work without git at runtime
RUN GIT_COMMIT_DATE=$(git log -1 --format="%ci" 2>/dev/null || echo "Unknown") && \
    GIT_COMMIT_HASH=$(git log -1 --format="%h" 2>/dev/null || echo "Unknown") && \
    echo "export GIT_COMMIT_DATE='$GIT_COMMIT_DATE'" >> /app/version.sh && \
    echo "export GIT_COMMIT_HASH='$GIT_COMMIT_HASH'" >> /app/version.sh

# Remove git and .git directory to reduce image size (no longer needed at runtime)
RUN apt-get purge -y git && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /app/.git

# Expose the port and start the server
EXPOSE 8080  
CMD ["/bin/bash", "-c", "source /app/version.sh && node server.js"]
