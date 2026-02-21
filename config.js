// config.js - Central configuration
const _supabaseUrl = 'https://rounqtjnvgntetliprqy.supabase.co';
const _supabaseKey = 'sb_publishable_n4AovVgcPqcrBr1xqG19QA_H8KxB9tq';

// 'supabaseClient' নামে ভেরিয়েবল তৈরি করা হলো যাতে সংঘর্ষ না হয়
const supabaseClient = supabase.createClient(_supabaseUrl, _supabaseKey);

// কমন ফাংশন: টাকা ফরম্যাট করা
function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount || 0);
}

// কমন ফাংশন: তারিখ ফরম্যাট করা
function formatDate(dateString) {
    if(!dateString) return "-";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}
