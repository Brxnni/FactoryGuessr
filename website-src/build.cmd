rmdir .\\build /s /q
:: Using "npm run build" will terminate early because npm will exit(0)
call npm run build
mkdir .\\build
mkdir .\\build\\game
mkdir .\\build\\game\\panoramas
call python .\\..\\tools\\addtoBuild.py
xcopy .\\static\\ .\\build\\ /E
xcopy .\\static-src\\ .\\build\\ /E
xcopy .\\..\\tools\\map .\\build\\ /E