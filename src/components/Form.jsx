const Form = () =>{
    return(
        <form action="https://formspree.io/f/xkgjnvop" method="POST" onsubmit="setTimeout(() => {location.reload();},400);">
                <label for="name">Name:</label>
                <input type="text" name="Name">
                <label for="email">Email:</label>
                <input type="email" name="Email">
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit" >Submit</button>
            </form>
    )
}

export default Form;