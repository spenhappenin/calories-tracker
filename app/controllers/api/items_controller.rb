class Api::ItemsController < ApiController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: current_user.items.order(:name)
  end

  def show
    render json: @item
  end

  def create
    item = current_user.items.new(item_params)
    if item.save
      render json: 'Item created.'
    else
      # TODO: Render proper errors
      render json: 'Something went wrong.'
    end
  end

  def update
    if @item.update(item_params)
      render json: 'Item updated.'
    else
      # TODO: Render proper errors
      render json: 'Something went wrong.'
    end
  end

  def destroy
    if @item.destroy
      render json: 'Item Deleted.'
    else
      # TODO: Render proper errors.
      render json: 'Something went wrong.'
    end
  end

  private
    def set_item
      @item = current_user.items.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :cals)
    end
end
