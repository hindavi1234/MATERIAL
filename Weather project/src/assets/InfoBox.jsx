import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const initialURL = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/dust_storm.jpg?VersionId=b6NiSMyYihoJiOfvMleNNbMd.hSu5gq1";

    const HOT_URL = "https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.jpg";
    const COLD_URL = "https://images.everydayhealth.com/images/wellness/what-freezing-cold-temperatures-do-to-your-body-alt-1440x810.jpg?sfvrsn=8c38eab7_1";
    const RAINY_URL = "https://t4.ftcdn.net/jpg/01/64/91/65/360_F_164916584_x01COi6mPyGNDfVVB8XKsD0QugGxaq6N.jpg"

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAINY_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80
                                ? <ThunderstormIcon/>
                                : info.temp > 15
                                    ? <WbSunnyIcon/>
                                    :<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Minimum Temperature = {info.tempMin}&deg;C</div>
                            <div>Maximum Temperature = {info.tempMax}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
