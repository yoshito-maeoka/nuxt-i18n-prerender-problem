<template>
    <ul>
        <li>
            <button @click="toggle">
                {{ $t('language-switch.en') }}
            </button>
        </li>
        <li>
            <button @click="toggle">
                {{ $t('language-switch.ja') }}
            </button>
        </li>
    </ul>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const toggle = () => {
    setLocale(locale.value === 'en' ? 'ja' : 'en');
}
</script>