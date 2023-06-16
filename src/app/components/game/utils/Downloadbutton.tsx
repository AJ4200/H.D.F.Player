import React from'react';

interface DownloadbuttonProps
{
    filelink: string,
    filename:string
}

const Downloadbutton: React.FC<DownloadbuttonProps> = ({filelink,filename}) => 
{
return (<div className="download-button">
<a href={filelink}>Download</a>
<p className="top">click to begin</p>
<p className="bottom">{filename}</p>
</div>);
}
export default Downloadbutton;