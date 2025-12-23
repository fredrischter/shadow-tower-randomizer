FROM ubuntu:24.04

WORKDIR /app

# Install necessary dependencies
RUN apt update && apt install -y \
    build-essential \
    wget \
    curl \
    unzip \
    libstdc++6 \
    libc6 \
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

# Expose the port and start the server
EXPOSE 8080  
CMD ["node", "server.js"]
