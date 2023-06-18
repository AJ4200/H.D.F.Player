import React from'react';

interface ResetbuttonProps
{
    onClick : () => void;
}

const Resetbutton: React.FC<ResetbuttonProps> = ({onClick}) => 
{
return (<button className='reset-button' onClick={onClick} >Reset</button>);
}
export default Resetbutton;