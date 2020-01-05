# reactnativefirst

Instructions

1. git clone
1. npm install
1. go to \node_modules\metro-config\src\defaults\blacklist.js                           
   and change 
   
  `var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
  ];`
  
  to
  
  `var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
 ];`
   
   
1. npm install react-native-cli --save   
1. yarn start (to start metro bundler)
2. react-native run-android 
3. Open App.js 
4. Uncomment List and refresh
5. Comment List and Uncomment Follow

