import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
    return (
        <ul className={classes.list}></ul>,
        props.meetups.map((meetup) => (
            <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description} />
        ))
    )
}

export default MeetupList;