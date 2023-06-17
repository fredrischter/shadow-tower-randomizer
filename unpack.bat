
SET dir=C:\Users\fred\Downloads\ReverseEngineering\mkpsxiso-2.03-win64\bin\

rm %dir%st.xml
rm -rf %dir%st
rm %dir%mkpsxiso.bin
rm %dir%mkpsxiso.cue

%dir%dumpsxiso.exe %dir%st_original.bin -x %dir%st -s %dir%st.xml > dumpsxiso.out

call npm run disassemble %dir%st\ST\COM\FDAT.T

REM call npm run disassemble %dir%st\ST\COM\TALKMSG.T
REM call npm run disassemble %dir%st\ST\COM\CRT.T
REM call npm run disassemble %dir%st\ST\COM\EQUIP.T
REM call npm run disassemble %dir%st\ST\COM\MO.T
REM call npm run disassemble %dir%st\ST\COM\STAT.T
REM call npm run disassemble %dir%st\ST\COM\ITEM.T

call npm run disassemble %dir%st\ST\CHR0\M00.T
call npm run disassemble %dir%st\ST\CHR0\M01.T
call npm run disassemble %dir%st\ST\CHR0\M02.T
call npm run disassemble %dir%st\ST\CHR0\M03.T
call npm run disassemble %dir%st\ST\CHR0\M04.T
call npm run disassemble %dir%st\ST\CHR0\M05.T
call npm run disassemble %dir%st\ST\CHR0\M06.T
REM call npm run disassemble %dir%st\ST\CHR0\M07.T
call npm run disassemble %dir%st\ST\CHR0\M08.T
call npm run disassemble %dir%st\ST\CHR0\M09.T

call npm run disassemble %dir%st\ST\CHR1\M10.T
call npm run disassemble %dir%st\ST\CHR1\M11.T
call npm run disassemble %dir%st\ST\CHR1\M12.T
call npm run disassemble %dir%st\ST\CHR1\M13.T
call npm run disassemble %dir%st\ST\CHR1\M14.T
call npm run disassemble %dir%st\ST\CHR1\M15.T
REM call npm run disassemble %dir%st\ST\CHR1\M16.T
call npm run disassemble %dir%st\ST\CHR1\M17.T
call npm run disassemble %dir%st\ST\CHR1\M18.T
REM call npm run disassemble %dir%st\ST\CHR1\M19.T

call npm run disassemble %dir%st\ST\CHR2\M20.T
call npm run disassemble %dir%st\ST\CHR2\M21.T
REM call npm run disassemble %dir%st\ST\CHR2\M22.T
call npm run disassemble %dir%st\ST\CHR2\M23.T
call npm run disassemble %dir%st\ST\CHR2\M24.T
call npm run disassemble %dir%st\ST\CHR2\M25.T
call npm run disassemble %dir%st\ST\CHR2\M26.T
call npm run disassemble %dir%st\ST\CHR2\M27.T
call npm run disassemble %dir%st\ST\CHR2\M28.T
REM call npm run disassemble %dir%st\ST\CHR2\M29.T

call npm run disassemble %dir%st\ST\CHR3\M30.T
REM call npm run disassemble %dir%st\ST\CHR3\M31.T
call npm run disassemble %dir%st\ST\CHR3\M32.T
call npm run disassemble %dir%st\ST\CHR3\M33.T
REM call npm run disassemble %dir%st\ST\CHR3\M34.T
REM call npm run disassemble %dir%st\ST\CHR3\M35.T
REM call npm run disassemble %dir%st\ST\CHR3\M36.T
call npm run disassemble %dir%st\ST\CHR3\M37.T
call npm run disassemble %dir%st\ST\CHR3\M38.T
REM call npm run disassemble %dir%st\ST\CHR3\M39.T

call npm run disassemble %dir%st\ST\CHR4\M40.T
call npm run disassemble %dir%st\ST\CHR4\M41.T

REM explorer %dir%st\ST\COM\

