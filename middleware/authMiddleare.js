export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, "kishorshresthaofficial");
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({message: "Unauthorized"});
    }
}