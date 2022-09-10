rmdir .\\build /s /q
call npm run build
xcopy .\\static-src\\ .\\build\\ /E
rmdir .\\build\\_app /s /q