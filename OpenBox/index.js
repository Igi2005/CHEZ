const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/openbox/:id', async (req, res) => {
    let id = Number(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Nieprawidłowy ID' });
    }

    try {
        const getUniqueData = await prisma.skrzynkibronie.findMany({
            where: { id_skrzyni: id }
        });

        const getBoxImage = await prisma.skrzynki.findUnique({
            where: { id_skrzynki: id }
        });

        const getImages = await prisma.images.findMany();

        const data = getUniqueData.map((obj) => {
            const matchedImage = getImages.find((img) => img.id === obj.id_broni);
            return matchedImage ? matchedImage : null;
        }).filter((item) => item !== null);

        res.json({ data, img: getBoxImage });
    } catch (error) {
        console.error('Błąd serwera: ', error.message);
        res.status(500).json({ error: 'Błąd serwera' });
    }
});

module.exports = router;
