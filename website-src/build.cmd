call python .\\..\\tools\\addtoBuild.py
rmdir .\\build /s /q
:: Using "npm run build" will terminate early because npm will exit(0)
call npm run build
xcopy .\\static\\ .\\build\\ /E
xcopy .\\static-src\\ .\\build\\ /E
