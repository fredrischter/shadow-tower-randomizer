# Setup and run

Install npm (NodeJS).
Go to repo folder via cmd and run:

npm install

# Functionality

Refer to ./site/index.html for features listing.

Current version works on folder extracted from ISO. You should extract, run the randomizer and then pack your ISO again. Future version should do this process automatically.

# Contact

fredrischter at gmail dot com

# Run manually

cd iso-folder

dumpsxiso.exe st_original.bin -x . -s st.xml

npm run mod "iso-folder"

mkpsxiso.exe st.xml -y
