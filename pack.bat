
SET dir=C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\

REM npm run assemble %dir%st\ST\COM\MO.T
REM npm run assemble %dir%st\ST\COM\STAT.T
REM npm run assemble %dir%st\ST\COM\TALKMSG.T
REM npm run assemble %dir%st\ST\COM\CRT.T
REM npm run assemble %dir%st\ST\COM\EQUIP.T
REM npm run assemble %dir%st\ST\COM\ITEM.T
node tfile_assemble.js %dir%st\ST\COM\FDAT.T

node tfile_assemble.js %dir%st\ST\CHR0\M00.T
node tfile_assemble.js %dir%st\ST\CHR0\M01.T
node tfile_assemble.js %dir%st\ST\CHR0\M02.T
node tfile_assemble.js %dir%st\ST\CHR0\M03.T
node tfile_assemble.js %dir%st\ST\CHR0\M04.T
node tfile_assemble.js %dir%st\ST\CHR0\M05.T
node tfile_assemble.js %dir%st\ST\CHR0\M06.T
REM node tfile_assemble.js %dir%st\ST\CHR0\M07.T
node tfile_assemble.js %dir%st\ST\CHR0\M08.T
node tfile_assemble.js %dir%st\ST\CHR0\M09.T

node tfile_assemble.js %dir%st\ST\CHR1\M10.T
node tfile_assemble.js %dir%st\ST\CHR1\M11.T
node tfile_assemble.js %dir%st\ST\CHR1\M12.T
node tfile_assemble.js %dir%st\ST\CHR1\M13.T
node tfile_assemble.js %dir%st\ST\CHR1\M14.T
node tfile_assemble.js %dir%st\ST\CHR1\M15.T
REM node tfile_assemble.js %dir%st\ST\CHR1\M16.T
node tfile_assemble.js %dir%st\ST\CHR1\M17.T
node tfile_assemble.js %dir%st\ST\CHR1\M18.T
REM node tfile_assemble.js %dir%st\ST\CHR1\M19.T

node tfile_assemble.js %dir%st\ST\CHR2\M20.T
node tfile_assemble.js %dir%st\ST\CHR2\M21.T
REM node tfile_assemble.js %dir%st\ST\CHR2\M22.T
node tfile_assemble.js %dir%st\ST\CHR2\M23.T
node tfile_assemble.js %dir%st\ST\CHR2\M24.T
node tfile_assemble.js %dir%st\ST\CHR2\M25.T
node tfile_assemble.js %dir%st\ST\CHR2\M26.T
node tfile_assemble.js %dir%st\ST\CHR2\M27.T
node tfile_assemble.js %dir%st\ST\CHR2\M28.T
REM node tfile_assemble.js %dir%st\ST\CHR2\M29.T

node tfile_assemble.js %dir%st\ST\CHR3\M30.T
REM node tfile_assemble.js %dir%st\ST\CHR3\M31.T
node tfile_assemble.js %dir%st\ST\CHR3\M32.T
node tfile_assemble.js %dir%st\ST\CHR3\M33.T
REM node tfile_assemble.js %dir%st\ST\CHR3\M34.T
REM node tfile_assemble.js %dir%st\ST\CHR3\M35.T
REM node tfile_assemble.js %dir%st\ST\CHR3\M36.T
node tfile_assemble.js %dir%st\ST\CHR3\M37.T
node tfile_assemble.js %dir%st\ST\CHR3\M38.T
REM node tfile_assemble.js %dir%st\ST\CHR3\M39.T

node tfile_assemble.js %dir%st\ST\CHR4\M40.T
node tfile_assemble.js %dir%st\ST\CHR4\M41.T

%dir%mkpsxiso.exe %dir%st.xml -q -y
