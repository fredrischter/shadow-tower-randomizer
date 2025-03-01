# Use lightweight Node.js image
FROM node:18-alpine  

WORKDIR /app

RUN apk add --no-cache python3 wget unzip grep curl

RUN apk update && apk add --no-cache \
    pkgconfig \
    cairo-dev \
    pango-dev \
    pixman-dev \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*
    
# Install LameGuy64's MKPSXISO
# Fetch the latest MKPSXISO release JSON and save to a file

# Extract the ZIP URL (modified for better reliability)
RUN curl -s https://api.github.com/repos/Lameguy64/mkpsxiso/releases/latest | \
    grep '"browser_download_url":' | \
    grep '.zip"' | \
    head -n 1 | \
    awk -F '"' '{print $4}' > /tmp/mkpsxiso_url.txt  

# Verify that the URL was extracted
RUN echo "Extracted URL:" && cat /tmp/mkpsxiso_url.txt  

# Read the URL from the file and download the ZIP
RUN MKPSXISO_URL=$(cat /tmp/mkpsxiso_url.txt) && \
    [ -n "$MKPSXISO_URL" ] && echo "Downloading from $MKPSXISO_URL" && \
    wget -O /tmp/mkpsxiso.zip "$MKPSXISO_URL"  

# Extract the ZIP file
RUN unzip /tmp/mkpsxiso.zip -d /usr/local/mkpsxiso  

# Remove the ZIP file to save space
RUN rm /tmp/mkpsxiso.zip 

RUN ls -lR /usr/local/mkpsxiso  # Debugging: list extracted files

RUN mkdir -p /usr/local/mkpsxiso/bin

# Find the extracted bin directory and move files if found
RUN BIN_DIR=$(find /usr/local/mkpsxiso -type d -name 'bin' -exec echo {} \; | head -n 1) && \
    echo "Found BIN_DIR: $BIN_DIR" && \
    if [ -n "$BIN_DIR" ]; then \
        mv $BIN_DIR/* /usr/local/mkpsxiso/bin/; \
    fi

# Make sure the binaries are executable
RUN chmod +x /usr/local/mkpsxiso/bin/*

# Create symbolic links to the binaries in /usr/local/bin if they don't already exist
RUN [ ! -f /usr/local/bin/mkpsxiso ] && ln -s /usr/local/mkpsxiso/bin/mkpsxiso /usr/local/bin/mkpsxiso || echo "mkpsxiso already exists in /usr/local/bin"
RUN [ ! -f /usr/local/bin/dumpsxiso ] && ln -s /usr/local/mkpsxiso/bin/dumpsxiso /usr/local/bin/dumpsxiso || echo "dumpsxiso already exists in /usr/local/bin"

COPY package*.json ./
RUN npm install --omit=dev  

COPY *.js .

COPY site /app/site  
COPY params /app/params

# Expose the port and start the server
EXPOSE 8080  
CMD ["node", "server.js"]
