import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text:"Let's hit the beach!",
		iconName: "sun"
	},
	winter:{
		text:"Brr, it's chilly!",
		iconName: "snowflake"
	}
};

const getSeason = (latt, month) => {
	if(month>2&& month<9){
		return latt > 0? 'summer': 'winter';
	}else{
		return latt > 0? 'winter': 'summer';
	}
};

const SeasonDisplay = (props) =>{
	const season = getSeason(props.latt, new Date().getMonth());

	const {text, iconName} = seasonConfig[season];
	
	return(
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`}  />
		</div>
	);
};

export default SeasonDisplay;





