const { log } = console;

export default function Hello (req, res) {

if (req.method === "POST") {

    const data = req?.body;
    
    /* log("req payload:", data) */
    
    res.json({ data });

}

return res.status(500).json({
    msg: "this needs to be a post request"
})


}