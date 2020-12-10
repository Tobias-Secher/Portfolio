import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab";
import React from "react";
import "./work-timeline.style.scss";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app';
import { makeStyles, Paper, Typography } from "@material-ui/core";
// import Moment from "react-moment";
import * as moment from 'moment';
import Moment from "react-moment";

interface WorkExperienceI {
    company: string;
    description: string;
    fromDate: WorkDateI;
    toDate: WorkDateI;
    workTitle: string;
}

interface WorkDateI {
    nanoseconds: number;
    seconds: number;
}

const WorkTimeline = (): JSX.Element => {
    const firestore: firebase.firestore.Firestore = firebase.firestore();

    const workCollection = firestore.collection('workExperience').orderBy('fromDate', 'desc')
    const [work] = useCollectionData<WorkExperienceI>(workCollection);
    console.log(work)

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: "6px 16px"
        },
        secondaryTail: {
            backgroundColor: '#41a4f5' //theme.palette.secondary.main
        }
    }));

    const classes = useStyles();

    const formatDate = (fromDate: number, toDate: number) => {
        // console.log(fromDate, toDate)
        const from = new Date(fromDate)
        console.log(from)
        // return (
        //     <>
        //         <Moment>{}</Moment>
        //     </>
        // )
    }

    return (
        <div>
            <Timeline align={'alternate'}>

                {work && work.map((w, index) => {
                    return (
                        <TimelineItem key={`work-${index}`}>
                            <TimelineOppositeContent>
                                <Typography>
                                    {w.company} - <span> {formatDate(w.fromDate.seconds, w.toDate.seconds)} </span>
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot></TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {w.workTitle}
                                    </Typography>
                                    <Typography>
                                        {w.description}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}

            </Timeline>
        </div>
    )
}

export default WorkTimeline;