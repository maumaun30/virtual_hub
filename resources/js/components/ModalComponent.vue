<template>
    <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#projectModal" title="Add Project">
        <i class="fa fa-plus"></i>
    </button>

    <div class="modal fade" id="projectModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" placeholder="Project name" v-model="form.project_name">
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" placeholder="Project description" v-model="form.project_desc">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="submit">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                project_name: null,
                project_desc: null
            }
        }
    },
    methods: {
        submit() {
            axios.post('/projects', this.form)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>