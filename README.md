# Setup and run


# Functionality

Refer to ./site/index.html for features listing.

# Contact

fredrischter at gmail dot com

# Run manually

//cd C:\Users\fred\Desktop\shadow-tower-randomizer

unpack>unpack.txt && npm run randomize .\params.json "F:\st">randomize.txt && npm run change changeset.json && pack>pack.txt

node map_walker.js map.json > walk.json 2> walk_log.txt
node map_shuffler.js > shuffle.json 2> nul
