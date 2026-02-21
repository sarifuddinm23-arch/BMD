// config.js - Central configuration for Supabase

const _supabaseUrl = 'https://rounqtjnvgntetliprqy.supabase.co';
const _supabaseKey = 'sb_publishable_n4AovVgcPqcrBr1xqG19QA_H8KxB9tq';

// সুপাবেস ক্লায়েন্ট ইনিশিয়ালাইজ করা
// উইন্ডো অবজেক্টে রাখা হচ্ছে যাতে সব ফাইল থেকে সহজে পাওয়া যায়
window.supabaseClient = supabase.createClient(_supabaseUrl, _supabaseKey);

// কমন ফাংশন: রুপি ফরম্যাটিং
function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount || 0);
}

// কমন ফাংশন: ডেট ফরম্যাটিং
function formatDate(dateString) {
    if (!dateString) return "-";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

// সাকসেস বা এরর মেসেজ দেখানোর কমন ফাংশন
function showStatus(message, isError = false) {
    alert(isError ? "❌ " + message : "✅ " + message);
}
