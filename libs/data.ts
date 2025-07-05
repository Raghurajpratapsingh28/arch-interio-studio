import homepageData from '@/data/homepage.json';
import worksData from '@/data/works.json';
import servicesData from '@/data/services.json';
import galleryData from '@/data/gallery.json';
import postsData from '@/data/posts.json';

// Types
export type ContentType = {
    type: string;
    excerpt: string;
    heading: string;
    image?: {
        _type: string;
        asset: any;
    };
};

export type ProjectType = {
    type: string;
    excerpt: string;
    projectname: string;
    tagline: string;
    location: string;
    url: string;
    imageUrls: ImageType[];
};

export type ImageType = {
    url: string;
};

export type Post = {
    title?: string;
    slug?: {
        current: string;
    };
    author: string;
    imageUrl: string;
    publishedAt: string;
    categories?: string[];
    body?: any[];
};

// Data functions
export async function getHomepage() {
    return homepageData;
}

export async function getWorksPage() {
    return worksData;
}

export async function getServicesPage(slug: string) {
    return servicesData;
}

export async function getGalleryPage() {
    return galleryData;
}

export async function getPosts(): Promise<Post[]> {
    return postsData.posts;
}

export async function getDetailPost(slug: string): Promise<Post | null> {
    const posts = postsData.posts;
    const post = posts.find(p => p.slug?.current === slug);
    return post || null;
} 