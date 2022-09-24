#!/bin/bash

echo "Creating the .env file.";
cat << EOF > .env

# Set port & hostname
PORT=8080
HOSTNAME=$(hostname)

# Set environment [development, testing, production]
# I'll assume you're using it in development env.
NODE_ENV=development

# Set debugger [true, false].
DEBUGGER=true

# Set logger format in case you enable the debugger.
# Check the predefined formats of the morgan logger -> https://www.npmjs.com/package/morgan#predefined-formats
LOGGER_FORMAT=dev

# Set backlog 
BACKLOG=20

# Add the needed environment variables below.

EOF