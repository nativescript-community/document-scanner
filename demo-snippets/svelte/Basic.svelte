<script lang="typescript">
    import { DocumentScanner } from '@nativescript-community/document-scanner';
    import { goBack } from 'svelte-native';
    const documentScanner = new DocumentScanner();
    async function startScan() {
        try {
            const result = await documentScanner.startScan();
            console.log('scan result', result)
        } catch (error) {
            console.error(error);
        }
    }
</script>

<page>
    <actionBar title="Basic Pager">
        <navigationButton text="Go back" on:tap={() => goBack()} />
    </actionBar>
    <stackLayout class="page">
        <button text="startscan" on:tap={startScan} />
    </stackLayout>
</page>

<style>
    .label {
        font-size: 35;
        width: 100%;
        text-align: center;
        vertical-alignment: center;
        color: #ffffff;
        text-transform: uppercase;
    }
</style>
