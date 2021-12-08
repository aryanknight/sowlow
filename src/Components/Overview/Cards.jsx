import React from 'react';


// export default function Cards() {
//     return (
//         <Card sx={{ maxWidth: 3, maxHeight:40 }}>
//             <CardMedia
//                 component="img"
//                 maxHeight="40"
//                 image={Blockchain}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     )
// }

export default function Cards({imgSrc,title,para}) {
    return (
        <div className="card-cont">
            <div className="card-img-cont">
                <img src={imgSrc} className="card-img"/>
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-text">
                {para}
            </div>
        </div>
    )
}
