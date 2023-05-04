
SET dir=C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\

rm %dir%st.xml
rm -rf %dir%st
rm %dir%mkpsxiso.bin
rm %dir%mkpsxiso.cue

%dir%dumpsxiso.exe %dir%st_original.bin -x %dir%st -s %dir%st.xml > dumpsxiso.out

REM call npm run disassemble %dir%st\ST\COM\MO.T
REM call npm run disassemble %dir%st\ST\COM\STAT.T
REM call npm run disassemble %dir%st\ST\COM\TALKMSG.T
REM call npm run disassemble %dir%st\ST\COM\CRT.T
REM call npm run disassemble %dir%st\ST\COM\EQUIP.T
call npm run disassemble %dir%st\ST\COM\FDAT.T
REM call npm run disassemble %dir%st\ST\COM\ITEM.T

REM explorer %dir%st\ST\COM\

