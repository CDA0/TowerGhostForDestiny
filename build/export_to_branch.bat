rmdir branch
mkdir branch
cd ..\www
copy index.html ..\build\branch\
copy bootstrap.json ..\build\branch\
node ..\build\applyCurrentVersion.js %1
copy ..\build\config_%1_versioned.xml ..\build\branch\config.xml
del ..\build\config_%1_versioned.xml
mkdir ..\build\branch\assets\
copy assets\ ..\build\branch\assets\
mkdir ..\build\branch\js\
xcopy js\* ..\build\branch\js\ /E /Y
mkdir ..\build\branch\data\
xcopy data\* ..\build\branch\data\ /E /Y
rmdir ..\build\branch\data\definitions /S /Q
mkdir ..\build\branch\compiled\
copy compiled\ ..\build\branch\compiled\
del ..\build\branch\compiled\*.gz
del ..\build\branch\compiled\*.map
mkdir ..\build\branch\res\icon\%1
copy res\icon\%1\ ..\build\branch\res\icon\%1
mkdir ..\build\branch\res\screen\%1
copy res\screen\%1\ ..\build\branch\res\screen\%1
cd ..\build
rd /s /q ..\..\branches\%1\www\data\common\
rd /s /q ..\..\branches\%1\www\js\
xcopy branch ..\..\branches\%1\www\ /E /Y
rd /s /q branch