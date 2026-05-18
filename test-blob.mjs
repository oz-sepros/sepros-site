import { list } from '@vercel/blob';

async function main() {
    try {
        console.log('Fetching blob list...');
        const { blobs } = await list();
        console.log(`Found ${blobs.length} blobs!`);
        for (const blob of blobs) {
            console.log(`- ${blob.pathname} -> ${blob.url}`);
        }
    } catch (e) {
        console.error('Error fetching blobs:', e.message);
    }
}
main();
