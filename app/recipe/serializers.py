from rest_framework import serializers

from core.models import Tag, Ingredient, Recipe


class TagSerializer(serializers.ModelSerializer):
    ''' Serializer for tag objects'''

    class Meta:
        model = Tag
        fields = ('id', 'name')
        read_only_fiels = ('id',)


class IngredientSerializer(serializers.ModelSerializer):
    ''' Serializer for ingredient objects'''

    class Meta:
        model = Ingredient
        fields = ('id', 'name')
        read_only_fiels = ('id',)


class RecipeSerializer(serializers.ModelSerializer):
    ''' Serializer a recipe '''
    ingredients = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Ingredient.objects.all()
    )

    # Returns only the id of the tags associated to recipe
    tags = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Tag.objects.all()
    )

    class Meta:
        model = Recipe

        fields = ('id', 'title', 'ingredients', 'tags', 'time_minutes', 'price', 'link')

        read_only_fields = ('id',)


class RecipeDetailSerializer(RecipeSerializer):
    ''' Serialize a recipe detial '''
    ingredients = IngredientSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
