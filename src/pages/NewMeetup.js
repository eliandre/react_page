import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {

    function addMeetupHandler(meetupData) {
        fetch('https://react-page-db594-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: { 'Content-Type': 'application/json'}
        })
    }

    return(
        <section>
            <h1>Lisa uus kohtumine</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;