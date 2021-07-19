import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Availables() {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    EBook Available for sale
                </Typography>
                <Typography variant="h5" component="h2">
                    You don't have any recent orders
                </Typography>
            </CardContent>
        </Card>
    )
}
