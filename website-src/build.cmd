rmdir .\\build /s /q
:: Using "npm run build" will terminate early because npm will exit(0)
call npm run build
xcopy .\\static-src\\ .\\build\\ /E
