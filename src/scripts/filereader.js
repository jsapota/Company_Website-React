export function readTextFile(file)
{

  var allText = "test";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status === 0)
      {
        allText = rawFile.responseText;
      }
    }
  }
  rawFile.send(null);
  return allText


}
