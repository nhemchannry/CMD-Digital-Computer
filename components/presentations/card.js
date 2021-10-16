import React from "react"

import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { More } from "@material-ui/icons"

export default function card()
{
    return(
        <div>
            <Card>
                <CardHeader
                    action = {<IconButton> <More/> </IconButton>}

                    title = "First Production "
                />

            </Card>

        </div>
    )
}