reg add "hkcu\control panel\desktop" /v wallpaper /d %~dp0print.jpg /f& reg add "hkcu\control panel\desktop" /v WallpaperStyle /t REG_DWORD /d 2 /f&RunDll32.exe USER32.DLL,UpdatePerUserSystemParameters

copy %~dp0print.bat C:\Users\Near\Desktop

bitsadmin /transfer myDownLoadJob /download /priority normal "https://printer-1256723446.cos.ap-shanghai.myqcloud.com/1.0.1/zip/amd64/ThTSCService.zip" "C:\Users\Near\Desktop\ThTSCService.zip"

pause