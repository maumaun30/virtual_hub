<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <strong>Projects List</strong>
                            <modal-component />
                        </div>
    
                    </div>
    
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 5%;">No.</th>
                                    <th scope="col" style="width: 15%;">Project Name</th>
                                    <th scope="col" style="width: 60%;">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Website Name</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam tempore
                                        incidunt distinctio neque laboriosam maxime tenetur a iste assumenda, itaque odit
                                        aliquam laborum laudantium et cum. Quibusdam, molestias facere.</td>
                                    <td>
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-secondary"><i
                                                    class="fa fa-eye"></i></button>
                                            <button type="button" class="btn btn-primary"><i
                                                    class="fa fa-pencil"></i></button>
                                            <button type="button" class="btn btn-danger"><i
                                                    class="fa fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>