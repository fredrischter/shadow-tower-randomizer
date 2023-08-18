
SET dir=C:\a\

REM npm run assemble %dir%st\ST\COM\MO.T
REM npm run assemble %dir%st\ST\COM\STAT.T
REM npm run assemble %dir%st\ST\COM\TALKMSG.T
REM npm run assemble %dir%st\ST\COM\CRT.T
REM npm run assemble %dir%st\ST\COM\EQUIP.T
REM npm run assemble %dir%st\ST\COM\ITEM.T
call npm run assemble %dir%st\ST\COM\FDAT.T %dir%st\ST\CHR0\M00.T %dir%st\ST\CHR0\M01.T %dir%st\ST\CHR0\M02.T %dir%st\ST\CHR0\M03.T %dir%st\ST\CHR0\M04.T %dir%st\ST\CHR0\M05.T %dir%st\ST\CHR0\M06.T %dir%st\ST\CHR0\M08.T %dir%st\ST\CHR0\M09.T %dir%st\ST\CHR1\M10.T %dir%st\ST\CHR1\M11.T %dir%st\ST\CHR1\M12.T %dir%st\ST\CHR1\M13.T %dir%st\ST\CHR1\M14.T %dir%st\ST\CHR1\M15.T %dir%st\ST\CHR1\M17.T %dir%st\ST\CHR1\M18.T %dir%st\ST\CHR2\M20.T %dir%st\ST\CHR2\M21.T %dir%st\ST\CHR2\M23.T %dir%st\ST\CHR2\M24.T %dir%st\ST\CHR2\M25.T %dir%st\ST\CHR2\M26.T %dir%st\ST\CHR2\M27.T %dir%st\ST\CHR2\M28.T %dir%st\ST\CHR3\M30.T %dir%st\ST\CHR3\M32.T %dir%st\ST\CHR3\M33.T %dir%st\ST\CHR3\M37.T %dir%st\ST\CHR3\M38.T %dir%st\ST\CHR4\M40.T %dir%st\ST\CHR4\M41.T

REM call npm run assemble %dir%st\ST\CHR0\M07.T

REM call npm run assemble %dir%st\ST\CHR1\M16.T
REM call npm run assemble %dir%st\ST\CHR1\M19.T

REM call npm run assemble %dir%st\ST\CHR2\M22.T
REM call npm run assemble %dir%st\ST\CHR2\M29.T

REM call npm run assemble %dir%st\ST\CHR3\M31.T
REM call npm run assemble %dir%st\ST\CHR3\M34.T
REM call npm run assemble %dir%st\ST\CHR3\M35.T
REM call npm run assemble %dir%st\ST\CHR3\M36.T
REM call npm run assemble %dir%st\ST\CHR3\M39.T

mkpsxiso.exe %dir%st.xml -q -y
