import React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography} from "@material-ui/core";
import Logo from "../components/Logo";
import {useStyles} from "../styles";

export default function ChooseScreen() {
    const styles = useStyles();
    return(
        <Fade in={true}>
            <Box className={[styles.root,styles.choose_color]}>
                <Box className={[styles.root,styles.center]}>
                    <Logo large></Logo>
                    <Typography variant={"h3"} component={"h3"} className={styles.center} gutterBottom>
                        Hvor skal du spise i dag?
                    </Typography>
                    <Box className={styles.cards}>
                        <Card  className={[styles.card, styles.space]}>
                            <CardActionArea>
                                <CardMedia
                                    component={"img"}
                                alt={"Eat in"}
                                image={"eatin.png"}
                                className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant={"h4"}
                                        color={"textPrimary"}
                                        component={"p"}
                                    >
                                        Spise ind
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                        <Card className={[styles.card, styles.space]} >
                            <CardActionArea>
                                <CardMedia
                                    component={"img"}
                                    alt={"Eat in"}
                                    image={"take_away.png"}
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant={"h4"}
                                        color={"textPrimary"}
                                        component={"p"}
                                    >
                                        Tag med
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}