
SET dir=C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\

REM npm run assemble %dir%st\ST\COM\MO.T
REM npm run assemble %dir%st\ST\COM\STAT.T
REM npm run assemble %dir%st\ST\COM\TALKMSG.T
REM npm run assemble %dir%st\ST\COM\CRT.T
REM npm run assemble %dir%st\ST\COM\EQUIP.T
REM npm run assemble %dir%st\ST\COM\ITEM.T
node tfile_assemble.js %dir%st\ST\COM\FDAT.T

%dir%mkpsxiso.exe %dir%st.xml -q
