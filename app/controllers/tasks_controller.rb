class TasksController < ApplicationController
	def index
		@task = Task.all
		# respond_with Task.all
	end

	def create
		respond_with Task.create( task_params )
	end

	def show
		respond_with Task.find(params[:id])
	end

	def update
		respond_with Task.update(params[:id], task_params)
	end

	def destroy
		respond_with Task.destroy(params[:id])
	end

private
  	def task_params
		params.require(:task).permit(
			:id,
			:name,
			:is_active
		)
		end
end
