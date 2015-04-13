// Problem 2.  Random numbers

// TO-DO:  Expand on our HTML code for the task.
var page = createWebpageFromTemplate(
<div>Please pick a number from 1 to 10
<textarea style="width:350px;height:30px" name="newText">..</textarea>
<br></br>
 <input type="submit" value="Submit"></input>
</div>);

function makeSecure(url) {
    return url.substring(0, 4) + "s" + url.substring(4);
}

// TO-DO define the HIT parameters.
var hitParams = {
    title: "Random Number",
    description: "Select a random number",
    url: makeSecure(page),
    height: 800,
    reward: 0.02,
    autoApprovalDelayInSeconds: 60
}

// Create the HIT
var hit = mturk.createHIT(hitParams)
print("Hit created  : "+ hit)

//Report the results on the writeup
