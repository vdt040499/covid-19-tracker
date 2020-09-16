import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox(props) {
    const { title, cases, total } = props;

    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

                <h2 className="infoBox__cases">{cases}</h2>

                <Typography className="inforBox__cases" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
