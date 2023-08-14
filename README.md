# Setup and run

## On windows

Install Powershell (https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3)
Install npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
Install Chocolatey (https://community.chocolatey.org/)

# Functionality

Refer to ./site/index.html for features listing.

# Contact

fredrischter at gmail dot com

# Run manually

cd iso-folder

dumpsxiso.exe st_original.bin -x . -s st.xml

npm run mod "iso-folder"

mkpsxiso.exe st.xml -y
