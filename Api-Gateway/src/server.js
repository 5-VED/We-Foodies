const app = require('./app');
const { PORT } = require("./Config/config")

app.listen(PORT, () => {
    console.log(`Api Gateway Server running on port ${PORT}`);
})

