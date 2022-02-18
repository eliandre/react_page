import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    return (

        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Kohtumise nimi</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Kohtumise pilt</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Aadress</label>
                    <input type="text" required id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Kirjeldus</label>
                    <textarea id="description" required rowe="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Lisa kohtumine</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;