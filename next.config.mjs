import createNextIntlPlugin from 'next-intl/plugin';
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));
 
// Import env here to validate during build. Using jiti we can import .ts files 🙂

const withNextIntl = createNextIntlPlugin();
jiti("./env");
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);