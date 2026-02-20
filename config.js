// config.js - Central configuration for Supabase
const _supabaseUrl = 'https://rounqtjnvgntetliprqy.supabase.co';
const _supabaseKey = 'sb_publishable_n4AovVgcPqcrBr1xqG19QA_H8KxB9tq';

// সুপাবেস ক্লায়েন্ট ইনিশিয়ালাইজ করা
const supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// কমন ফাংশন: রুপি ফরম্যাটিং (ঐচ্ছিক কিন্তু কাজের)
function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
}

// কমন ফাংশন: ডেট ফরম্যাটিং
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}
