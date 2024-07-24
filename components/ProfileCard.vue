<template>
    <div class="pa-5 w-100 h-100">
        <v-card class="pa-5 my-5 mb-15" elevation="10">
            <div class="d-inline-flex">
                <v-avatar color="primary" size="200"></v-avatar>
                <div class="pl-10">
                    <div class="text-h4">Alex Gonzalez</div>
                    <dl class="d-flex text-body-2 flex-column">
                        <dt>Born:</dt>
                        <dd>June 17th, 2003</dd>
                        <dd>Miami, Florida</dd>
                        <dt>Heritage:</dt>
                        <dd>Cuban</dd>
                        <dd>American</dd>
                        <dd>Spanish</dd>
                        <dt>Occupation:</dt>
                        <dd>Software Engineer</dd>
                    </dl>
                </div>
            </div>
        </v-card>
    </div>
</template>

<style scoped>

dt {
    font-weight: bold;
}

dd {
    margin-left: 20px;
}

dd::before {
    content: "● ";
}

</style>