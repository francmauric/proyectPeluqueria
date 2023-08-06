const { log } = console;

export default function Hello (req, res) {

    const data = req?.body;

    log("req payload:", data)

    res.json({ msg: "Hello Word" });

}